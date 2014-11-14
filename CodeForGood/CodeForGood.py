from flask import Flask, jsonify

app = Flask(__name__)

users = [
    {
        'name':'Sisi'
    },
    {
        'name':'Lachezar'
    }
]

@app.route('/api/users')
def get_users():
    return jsonify({'users':users})


if __name__ == '__main__':
    app.run(debug=True)
