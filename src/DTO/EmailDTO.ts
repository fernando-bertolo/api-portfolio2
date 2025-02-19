export class EmailDTO {
    private name: string;
    private email: string;
    private telefone: string;
    private mensagem: string;

    constructor(name: string, email: string, telefone: string, mensagem: string) {
        this.name = name;
        this.email = email;
        this.telefone = telefone;
        this.mensagem = mensagem;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string) {
        this.email = email;
    }

    public getTelefone(): string {
        return this.telefone;
    }

    public setTelefone(telefone: string) {
        this.telefone = telefone;
    }

    public getMensagem(): string {
        return this.mensagem;
    }

    public setMensagem(mensagem: string) {
        this.mensagem = mensagem;
    }
}