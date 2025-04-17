from flask import Flask, request, render_template, send_from_directory, jsonify
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
import mysql.connector
import time
app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure the upload folder exists
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

db = mysql.connector.connect(
    host='localhost',
    user='root',
    password='',
    database='flooring-business'
)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def index():
    return 'hello world'

@app.route('/upload-form')
def upload_form():
    return render_template('upload_form.html')

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'photo' not in request.files:
        return render_template('upload_result.html', error='No photo part in the request')
    file = request.files['photo']
    if file.filename == '':
        return render_template('upload_result.html', error='No selected file')
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        try:
            file.save(filepath)
        except Exception as e:
            return render_template('upload_result.html', error=f'Error saving file: {str(e)}'), 500

        file_path_to_save = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        cursor = db.cursor()
        try:
            sql = "INSERT INTO photos (path) VALUES (%s)"
            cursor.execute(sql, (file_path_to_save,))
            db.commit()
            cursor.close()
            return render_template('upload_result.html', message='File uploaded and path saved successfully', filename=filename)
        except mysql.connector.Error as err:
            db.rollback()
            cursor.close()
            os.remove(filepath)  # Remove the saved file on DB error
            return render_template('upload_result.html', error=f"Error saving path to database: {err}"), 500
        finally:
            if db.is_connected():
                pass

    return render_template('upload_result.html', error='Invalid file type')

@app.route('/photos')
def get_photos():
    cursor = db.cursor()
    cursor.execute("SELECT * FROM photos")
    photos = cursor.fetchall()
    cursor.close()
    return jsonify(photos)

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == '__main__':
    from flask import send_from_directory
    app.run(debug=True)