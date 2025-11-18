---

# 📄 **[DOCUMENTAÇÃO – Benchmark entre Recharts e Chart.js]**

*Plataforma → Engenharia → Validação Técnica*

---

# 📘 **1. Contexto**

Este documento tem como objetivo registrar a avaliação comparativa entre as bibliotecas de gráficos **Recharts** e **Chart.js**, com foco em identificar qual oferece:

* Melhor **performance**
* Menor **consumo de CPU**
* Menor **uso de memória**
* Melhor **tempo de renderização**
* Melhor **velocidade de carregamento**
* Melhor **experiência de desenvolvimento**
* Maior **adequação ao modelo de integração back-end → front-end** utilizado na plataforma

A avaliação foi realizada através de uma **Prova de Conceito (POC)** desenvolvida com ambas as bibliotecas, utilizando datasets mockados e idênticos.

---

# 🧪 **2. Metodologia do Benchmark**

### **2.1 Ambiente de Testes**

* **Navegador:** Edge (Versão 142.0.3595.80)
* **Modo:** Incognito + DevTools aberto + Disable Cache habilitado
* **Hardware utilizado:**

  * CPU: Intel(R) Core(TM) Ultra 7 165U (1.70 GHz)
  * RAM: 16 GB
  * SO: Windows

---

### **2.2 Ferramentas Utilizadas**

| Ferramenta                            | Métrica                                             |
| ------------------------------------- | --------------------------------------------------- |
| Chrome DevTools – Performance         | Render time, CPU time, JS execution, Layout & Paint |
| Chrome DevTools – Performance Monitor | Uso de memória (heap), DOM nodes                    |
| Network Panel                         | Tempo de carregamento inicial                       |
| `performance.now()`                   | Medição de render Time programática                 |
| Recording repetido 5x                 | Média aritmética por amostra                        |

---

### **2.3 Bibliotecas Testadas**

| Biblioteca                 | Versão | Observação                           |
| -------------------------- | ------ | ------------------------------------ |
| Recharts                   | X.X.X  | Usa composição com componentes React |
| Chart.js + react-chartjs-2 | X.X.X  | Canvas-based (imperativo)            |

---

### **2.4 Tipos de Gráficos Testados**

* Linha
* Barra
* Pizza / Donut
* Área

Todos implementados **com o mesmo dataset**, no mesmo layout e mesmas dimensões.

---

### **2.5 Dataset Utilizado**

#### **Datasets mockados**

| Tamanho      | Pontos            | Uso            |
| ------------ | ----------------- | -------------- |
| Pequeno      | 100               | Base funcional |
| Médio        | 1.000             | Cenário típico |
| Grande       | 10.000            | Stress test    |
| Muito grande | 50.000 (opcional) | Limite máximo  |

---

# 🚀 **3. Métricas Coletadas**

Para cada tamanho da amostra, foram coletadas:

### **3.1 Tempo de renderização**

* Tempo necessário para o gráfico ser desenhado após receber os dados.

### **3.2 Uso de CPU**

* Capturado no DevTools Performance → JS Execution + Rendering Phases.

### **3.3 Uso de memória (JS Heap)**

* Antes e depois da renderização
* Medido via Performance Monitor

### **3.4 Tempo de carregamento inicial**

* FCP
* DOMContentLoaded
* Total JS Boot Time

---

# 📊 **4. Resultados**

As tabelas a seguir contêm **modelos prontos** para você preencher com seus dados reais.

---

## **4.1 Tempo de Renderização (ms)**

| Dataset | Recharts (ms) | Chart.js (ms) | Diferença | Melhor    |
| ------- | ------------- | ------------- | --------- | --------- |
| 10     | 1220            | 177            | XX        | Chart.js |
| 100   | 2200            | 256            | XX        | Chart.js |
| 500  | 5000            | 260            | XX        | Chart.js |
| 1.000  | XX            | 277            | XX        | Chart.js |
| 10.000  | XX            | 1078            | XX        | Chart.js |

---

## **4.2 Uso de CPU (pico durante render)**

| Dataset | Recharts | Chart.js | Diferença | Melhor    |
| ------- | -------- | -------- | --------- | --------- |
| 50      | 2s       | 0,95s    | +1,05     | Chart.js |
| 100     | 3,5s     | 1,1s     | +2,4      | Chart.js |
| 500     | 8s       | 1,2s     | +6,8      | Chart.js |
| 1.000   | 11s      | 1,5s     | +9,5      | Chart.js |
| 10.000  | N/A      | 2,5s     | N/A       | N/A      |

---

## **4.3 Memória – Heap (Antes / Depois / Diferença)**

| Dataset | Recharts           | Chart.js           | Melhor    |
| ------- | ------------------ | ------------------ | --------- |
| 10      | 31MB               | 17,2MB             | Chart.js |
| 50      | 38MB (+7)          | 18,3MB (+1,1)      | Chart.js |
| 100     | 43MB (+5)          | 19MB (+0,7)        | Chart.js |
| 500     | 75MB (+22)         | 25MB (+6)          | Chart.js |
| 1.000   | 109MB (+34)        | 30,7MB (+6,7)      | Chart.js |
| 10.000  | 662MB (+550)       | 151MB (+120)       | Chart.js |
| 50.000  | N/A                | 479MB (+328)       | Chart.js |

---

## **4.4 Carregamento Inicial da Página**

| Métrica          | Recharts | Chart.js | Vencedor |
| ---------------- | -------- | -------- | -------- |
| FCP              | XX ms    | XX ms    | **X**    |
| DOMContentLoaded | XX ms    | XX ms    | **X**    |
| JS Boot Time     | XX ms    | XX ms    | **X**    |

---

# 🔍 **5. Análise Técnica**

(Escreva aqui com base no seus resultados reais — abaixo está um modelo.)

### **5.1 Performance geral**

📌 *Observações típicas que você pode utilizar:*

* Recharts se mantém mais estável em datasets grandes devido à renderização via SVG + React reconciliation.
* Chart.js tem picos de CPU mais altos por redesenhar o canvas inteiro.
* Chart.js tende a ser mais rápido em gráficos pequenos.
* Recharts ganha vantagem clara em 10k+ pontos.

---

### **5.2 Uso de memória**

* Chart.js tende a consumir mais heap em datasets maiores devido a buffers internos.
* Recharts usa mais memória em componentes React, mas é mais previsível.

---

### **5.3 Experiência de desenvolvimento (DX)**

Pontos avaliados:

| Critério             | Recharts           | Chart.js                              |
| -------------------- | ------------------ | ------------------------------------- |
| Facilidade de uso    | 👍 simples         | ⚠️ exige config extensa               |
| Suporte a React      | Excelente (nativo) | Indireto (bridge via react-chartjs-2) |
| Componentização      | Excelente          | Baixa                                 |
| Curva de aprendizado | Baixa              | Média                                 |
| Customização         | Média              | Alta                                  |

---

# 🏁 **6. Conclusão**

### Exemplo pronto (substitua quando tiver os números reais):

> Após a realização dos testes com datasets de 100, 1.000 e 10.000 registros, identificou-se que:
>
> * **Recharts apresentou melhor performance em amostras médias e grandes**, com menor uso de CPU e tempos mais estáveis.
> * **Chart.js apresenta carregamento inicial mais rápido e maior flexibilidade visual**, porém sofre em datasets maiores.
> * Para a arquitetura atual, focada no uso de React e dashboards dinâmicos, **Recharts é tecnicamente a opção mais adequada**.

📌 **Recomendação final:** Adotar **Recharts** como biblioteca principal de visualização de dados na plataforma.

---

# 📝 **7. Anexos**

### 7.1 Capturas de DevTools Performance

*(Inserir imagens)*

### 7.2 Recordings de CPU

*(Inserir prints do timeline)*

### 7.3 Métricas brutas exportadas

*(JSONs, planilhas ou screenshots)*

---