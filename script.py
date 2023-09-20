import matplotlib.pyplot as plt

# Dados para o gráfico de colunas
categorias = ['Categoria A', 'Categoria B', 'Categoria C', 'Categoria D']
valores = [10, 24, 18, 32]

# Crie o gráfico de colunas
plt.bar(categorias, valores)
plt.xlabel('Categorias')
plt.ylabel('Valores')
plt.title('Gráfico de Colunas')

# Salve o gráfico como uma imagem (opcional)
plt.savefig('static/grafico_colunas.png')

# Exiba o gráfico (opcional)
plt.show()
