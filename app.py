from flask import Flask, render_template, request, redirect, url_for
import uuid
app = Flask(__name__)


@app.route('/')
def index():
    uid = uuid.uuid4()
    return render_template("index.html", uid=uid)


@app.route('/api/upload/', methods=["POST"])
def upload_file():
    if request.method == 'POST':
        uid = request.args.to_dict().get("uid")
        print(request.files)
        print(uid)
    return redirect(url_for("index"))


if __name__ == '__main__':
    app.run()
