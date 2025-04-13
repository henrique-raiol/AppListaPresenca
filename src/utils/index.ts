export function obterDataAtualFormatada(): string {
  const data = new Date();
  const opcoes: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return data.toLocaleDateString('pt-BR', opcoes);
}