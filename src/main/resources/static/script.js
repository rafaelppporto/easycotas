const telefoneInput = document.getElementById("telefone");

telefoneInput.addEventListener("input", function (e) {
  let valor = e.target.value;

  valor = valor.replace(/\D/g, "");

  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");

  valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

  e.target.value = valor;
});

document
  .getElementById("formulario")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const dados = {
      nome: document.getElementById("nome").value,

      telefone: document.getElementById("telefone").value,

      email: document.getElementById("email").value,

      objetivo: document.getElementById("objetivo").value,
    };

    try {
      const resposta = await fetch("/usuarios", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(dados),
      });

      if (resposta.ok) {
        document.getElementById("mensagem").innerText =
          "Cadastro realizado com sucesso!";

        document.getElementById("formulario").reset();
      } else {
        document.getElementById("mensagem").innerText = "Erro ao cadastrar.";
      }
    } catch (erro) {
      document.getElementById("mensagem").innerText =
        "Erro de conexão com o servidor.";

      console.error(erro);
    }
  });
