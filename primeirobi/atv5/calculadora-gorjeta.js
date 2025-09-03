function calcularGorjeta(valorConta, percentualGorjeta) {
  return valorConta * (percentualGorjeta / 100);
}

function calcularTotal(valorConta, valorGorjeta) {
  return valorConta + valorGorjeta;
}

function exibirResultado(
  valorConta,
  percentualGorjeta,
  valorGorjeta,
  valorTotal
) {
  console.log(
    `Valor da Conta: R$${valorConta.toFixed(
      2
    )}, Gorjeta (${percentualGorjeta}%): R$${valorGorjeta.toFixed(
      2
    )}, Total a pagar: R$${valorTotal.toFixed(2)}`
  );
}

const valorConta = 100;
const percentualGorjeta = 15;

const valorGorjeta = calcularGorjeta(valorConta, percentualGorjeta);
const valorTotal = calcularTotal(valorConta, valorGorjeta);

exibirResultado(valorConta, percentualGorjeta, valorGorjeta, valorTotal);
