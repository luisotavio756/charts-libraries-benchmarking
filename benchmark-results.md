# **1. Contexto**

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

# **2. Metodologia do Benchmark**

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
| Network Panel                         | Tempo de carregamento inicial                       |             |

---

### **2.3 Bibliotecas Testadas**

| Biblioteca                 | Versão | Observação                           |
| -------------------------- | ------ | ------------------------------------ |
| Recharts                   | ^3.4.1 | Usa composição com componentes React |
| Chart.js - react-chartjs-2 | ^4.5.1 - ^5.3.1  | Canvas-based (imperativo)            |

---

### **2.4 Tipos de Gráficos Testados**

* Linha
* Barra
* Pizza / Donut
* Área
* Scatter
* Radar

Todos implementados **com o mesmo dataset**, no mesmo layout e mesmas dimensões.

---

### **2.5 Dataset Utilizado**

#### **Datasets mockados**

| Tamanho      | Pontos            | Uso            |
| ------------ | ----------------- | -------------- |
| 1      | 10               | Base funcional |
| 2        | 50             | Cenário típico |
| 3       | 100            | Cenário típico    |
| 4 | 5000  | Stress Test  |
| 5 | 10.000  | Stress Test  |
| 6 | 50.000  | Limite máximo  |

---

# **3. Métricas Coletadas**

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

---

# **4. Resultados**

As tabelas a seguir contêm **modelos prontos** para você preencher com seus dados reais.

---

## **4.1 Tempo de Renderização (ms)**

| Dataset | Recharts (ms) | Chart.js (ms) | Diferença | Melhor    |
| ------- | ------------- | ------------- | --------- | --------- |
| 10     | 1.220            | 177            | +1,0    | Chart.js |
| 50     | 1.864            | 217            | +1,6    | Chart.js |
| 100    | 2.200            | 256            | +1,9    | Chart.js |
| 500    | 5.000            | 260            | +4,7    | Chart.js |
| 1.000  | 9.900            | 277            | +9,6    | Chart.js |
| 10.000 | XX               | 1078           | N/A     | N/A |
| 50.000 | XX               | N/A            | N/A     | N/A |

---

## **4.2 Uso de CPU (pico durante render)**

| Dataset | Recharts | Chart.js | Diferença | Melhor    |
| ------- | -------- | -------- | --------- | --------- |
| 50      | 2s       | 0,95s    | +1,05     | Chart.js |
| 100     | 3,5s     | 1,1s     | +2,4      | Chart.js |
| 500     | 8s       | 1,2s     | +6,8      | Chart.js |
| 1.000   | 11s      | 1,5s     | +9,5      | Chart.js |
| 10.000  | XX       | 2,5s     | N/A       | N/A      |
| 50.000  | XX       | N/A      | N/A       | N/A      |

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
| 50.000  | XX                 | 479MB (+328)       | Chart.js |

---

## **4.4 Carregamento Inicial da Página**

| Métrica          | Recharts | Chart.js | Vencedor |
| ---------------- | -------- | -------- | -------- |
| FCP              | 337 ms    | 331 ms    | N/A    |
| DOMContentLoaded | 220 ms    | 219 ms    | N/A    |

---

# **5. Análise Técnica**

(Escreva aqui com base no seus resultados reais — abaixo está um modelo.)

### **5.1 Performance geral**

* Chart.js se mantém mais estável em datasets pequenos e grandes.
* Recharts tem picos de CPU mais altos por redesenhar o canvas inteiro.
* Recharts tem processo de renderização mais lenta em todos os Datasets, mesmo desconsiderando a animação.

---

### **5.2 Uso de memória**

* Recharts tende a consumir mais heap em datasets maiores devido a buffers internos.

---

### **5.4 LCP e DCL**

* Ambos foram eficientes no carregamento inicial da página. O tamanho da biblioteca "Recharts" é ligeiramente maior que as duas bibliotecas juntas do Chart.js (chart-js + react-charts-2)

---

### **5.4 Experiência de desenvolvimento (DX)**

Pontos avaliados:

| Critério             | Recharts           | Chart.js                              |
| -------------------- | ------------------ | ------------------------------------- |
| Facilidade de uso    | Simples         | Média               |
| Suporte a React      | Excelente (nativo) | Indireto (bridge via react-chartjs-2) |
| Componentização      | Excelente          | Baixa                                 |
| Curva de aprendizado | Baixa              | Média                                 |
| Customização         | Média              | Alta                                  |

---

### **6. Ameaças à Validade do Benchmark**

1. Ameaças Internas:
   - Re-renderizações involuntárias do React.
   - Interferência de processos do sistema.
   - Ambiente inconsistente entre execuções.

2. Ameaças Externas:
   - Mock de dados não refletir dados reais.
   - Resultados variam em hardware mais fraco.

3. Ameaças de Construção:
   - Gráficos não 100% equivalentes entre libs.
   - Animações e defaults diferentes.
   - Dimensões diferentes do canvas.

4. Ameaças de Conclusão:
   - Diferenças dentro da margem de erro.
   - Número insuficiente de execuções.
   - Interpretação equivocada das métricas.
   - Viés do experimentador.

---

# **7. Conclusão**


> Após a realização dos testes com datasets, identificou-se que:
>
> * **Chart.js apresentou melhor performance em amostras médias e grandes**, com menor uso de CPU e tempos mais estáveis.
> * Para a arquitetura atual, focada no uso de React e dashboards dinâmicos, **Charts.js é tecnicamente a opção mais adequada**.

**Recomendação final:** Adotar **Chart.js** como biblioteca principal de visualização de dados na plataforma.

---