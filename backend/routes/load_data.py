from flask import Flask, request, render_template
import os

from . import api
from backend import app


# define the upload route
@api.route('/upload', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'audio_files' not in request.files:
            return 'No file part'

        # get the list of uploaded files
        files = request.files.getlist('audio_files')

        # save each file to disk
        for file in files:
            if file:
                file.save(os.path.join(app.config["UPLOAD_FOLDER"], file.filename))

        # return a success message
        return 'Files uploaded successfully!'

    # if the request method is GET, show the upload form
    return render_template('index.html')
