from flask import Flask, render_template, request, redirect, url_for, flash, session

app = Flask(__name__)
app.secret_key = 'uma_chave_secreta_muito_segura' # Troque por uma chave segura em produção

@app.route('/')
def index():
    return redirect(url_for('clientes'))

@app.route('/clientes')
def clientes():
    return render_template('clientes.html')

@app.route('/oportunidades')
def oportunidades():
    return render_template('oportunidades.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username == 'master' and password == 'master123':
            session['username'] = username
            flash('Login bem-sucedido!', 'success')
            return redirect(url_for('usuario'))
        else:
            flash('Usuário ou senha inválidos.', 'danger')
    return render_template('login.html')

@app.route('/usuario')
def usuario():
    if 'username' in session:
        return render_template('usuario.html', username=session['username'])
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)
