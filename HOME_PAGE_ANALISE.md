# Análise da Home Page - O que falta implementar

## ✅ Seções já implementadas

1. **Hero Section** ✅
   - Título principal
   - Subtítulo
   - Botões de CTA
   - Background com overlay

2. **Cursos Section** ✅
   - Título "Conheça nossos cursos:"
   - Grid de cards de cursos
   - Imagens com overlay

3. **Diferenciais Section** ✅
   - Título "A diferença começa na escolha"
   - Cards com ícones
   - Grid responsivo

4. **OAB Recomenda Section** ✅
   - Número "4x" destacado
   - Badge "Selo OAB Recomenda"
   - Texto descritivo
   - Link "Saiba mais"

5. **CTA Section** ✅
   - Seção com fundo escuro
   - Texto motivacional
   - Botão de CTA

6. **Video Section** ✅
   - Imagem de fundo
   - Botão de play centralizado

---

## ❌ Seções faltando

### 1. **Seção "Autoridade em ensino jurídico"** 
**Status:** ⚠️ Parcialmente implementado (CTASection atual é diferente)

**O que falta:**
- Dois boxes CTA lado a lado:
  - **Box Esquerdo (Vermelho):**
    - Fundo vermelho sólido
    - Título: "Venha conhecer FMP de perto" (ou similar)
    - Texto descritivo
    - Botão "Saiba mais" com ícone de seta
  - **Box Direito (Bege):**
    - Fundo bege/claro
    - Título: "Acompanhe nossas notícias" (ou similar)
    - Texto descritivo
    - Botão "Ver todas" com ícone de seta

**Ação:** Criar novo componente `AutoridadeSection.tsx` ou modificar `CTASection.tsx`

---

### 2. **Seção "Entre as melhores faculdades privadas"**
**Status:** ❌ Não implementado

**O que precisa:**
- Título: "Entre as melhores faculdades privadas"
- Três badges circulares grandes:
  - Badge central com logo OAB
  - Dois badges laterais com outros reconhecimentos
- Carousel/slider com indicadores (dots)
- Background bege/claro

**Ação:** Criar componente `ReconhecimentosSection.tsx`

---

### 3. **Seção de Notícias/Blog**
**Status:** ❌ Não implementado

**O que precisa:**
- Layout em 3 colunas:
  - **Colunas Esquerda e Meio:**
    - Cards de artigos com:
      - Imagem no topo
      - Badge/categoria (pill vermelho) - ex: "EVENTOS", "NOTÍCIAS"
      - Título do artigo
      - Data
  - **Coluna Direita:**
    - Lista vertical de notícias
    - Cada item com título e data
- Background bege/claro

**Ação:** Criar componente `NoticiasSection.tsx`

---

### 4. **Seção de Depoimentos/Testimonials**
**Status:** ❌ Não implementado

**O que precisa:**
- Título: "O que nossos ex-alunos dizem"
- Carousel horizontal com cards de depoimentos:
  - Cada card contém:
    - Citação/quote do ex-aluno
    - Foto circular do ex-aluno
    - Nome do ex-aluno
    - Curso/título
  - Cards brancos com bordas arredondadas
  - Sombras sutis
- Indicadores de carousel (dots)
- Background bege/claro

**Ação:** Criar componente `DepoimentosSection.tsx` ou `TestimonialsSection.tsx`

---

## 📋 Resumo de componentes a criar

1. **`AutoridadeSection.tsx`** - Seção com dois boxes CTA (vermelho e bege)
2. **`ReconhecimentosSection.tsx`** - Badges circulares de reconhecimento
3. **`NoticiasSection.tsx`** - Seção de notícias/blog
4. **`DepoimentosSection.tsx`** - Seção de testimonials

---

## 🎨 Variantes CVA adicionais necessárias

Para os novos componentes, pode ser necessário criar:

- **Card variants** - Para diferentes tipos de cards (notícias, depoimentos, badges)
- **Badge variants** - Para badges de categoria (pill vermelho)
- **Carousel variants** - Para estilização de carousels

---

## 📝 Ordem sugerida de implementação

1. **AutoridadeSection** - Substituir ou complementar CTASection atual
2. **ReconhecimentosSection** - Após OAB Recomenda
3. **NoticiasSection** - Após Video Section
4. **DepoimentosSection** - Antes do Footer

---

## 🔄 Ajustes necessários no CTASection atual

O `CTASection` atual parece ser diferente do design. Considerar:
- Renomear para algo mais específico
- Ou criar o novo `AutoridadeSection` e manter ambos
- Ou substituir completamente
