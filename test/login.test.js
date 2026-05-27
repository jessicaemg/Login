import { fazerLogin } from '../src/login.js';
import assert from 'node:assert'


describe('Cenários de teste de Login',  () => {
  it('1) Login realizado com sucesso', () => {
    const retorno = fazerLogin ('admin@site.com', '123');
    assert.strictEqual(retorno, "Login realizado com sucesso.");
  });

  it('2) Credencial expirada', () => {
    const retorno = fazerLogin ('marcos@site.com', 'xyz');
    assert.strictEqual(retorno, "Credencial expirada, entre em contato com o suporte");
  });

  it('3) Usuario não encontrado', () => {
    const retorno = fazerLogin ('jessuca@site.com', 'dushdush');
    assert.strictEqual(retorno, "Usuário não encontrado na base.");
  });

  it('4) Senha incorreta para o usuário encontrado', () => {
    const retorno = fazerLogin ('davi@site.com', 'a3258');
    assert.strictEqual(retorno, "Login ou senha incorretos, tente novamente");
  });



})