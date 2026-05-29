//Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: 
// id, nome, email, senha e expirado (boleano, pode ser true ou false). Adicione ao menos um dos usuarios como expirado sendo true.
// Desafio:
// Construa uma função de para realizar login. 
// Quem usar a função deverá receber uma mensagem dizendo que o login 
// foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. 
// A função deve dizer que as credenciais expiraram caso expirado for true. 
// A função também tem que dizer que as credenciais estão incorretas caso o email não exista 
// ou a senha esteja incorreta para aquele email.
// Testes:
// Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuario não encontrado e 4) Senha incorreta para o usuário encontrado.
// Exemplo:fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
// fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> Renove suas credenciais 

const usuarios = [
    { 
        id: 1, 
        nome: "admin", 
        email: "admin@site.com", 
        senha: "123", 
        expirado: false 
    },
    { 
        id: 2, 
        nome: "Davi", 
        email: "davi@site.com", 
        senha: "abc", 
        expirado: false 
    },
    { 
        id: 3, 
        nome: "Marcos", 
        email: "marcos@site.com",
        senha: "xyz", 
        expirado: true 
    }
];


function fazerLogin(email, senha){
    //mensagem de erro para usuário não encontrado
    let mensagemRetorno = "Usuário não encontrado na base.";
    
    usuarios.forEach((usuario) => {
        //e-mail encontrando no vetor
        if (usuario.email === email){
            //4) Senha incorreta para o usuário encontrado.
            if (usuario.senha !== senha){
                mensagemRetorno = "Login ou senha incorretos, tente novamente";
            }
            //2) Credencial expirada
            else if (usuario.expirado){
                mensagemRetorno = "Credencial expirada, entre em contato com o suporte";
            }
            else{
            //1) Sucesso
                mensagemRetorno = "Login realizado com sucesso.";
            }
        }
    });
    //3) Usuario não encontrado
    return mensagemRetorno;
}
export { fazerLogin };