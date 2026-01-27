# Análise do Código da Home Page

## ✅ O que está correto
- Estrutura básica do componente React/Next.js
- Uso de Tailwind CSS
- Ícones do Lucide React
- Animações com Framer Motion (conceito)

## ❌ Problemas encontrados

### 1. **Importações Incorretas**

#### `react-router-dom` → Deve ser `next/link`
```tsx
// ❌ ERRADO (linha 6)
import { Link } from "react-router-dom";

// ✅ CORRETO
import Link from "next/link";
```

**Impacto:** Todos os `<Link to="...">` devem ser alterados para `<Link href="...">`

#### Componentes não existentes
```tsx
// ❌ ERRADO (linha 3)
import { HeroSection, PageLayout } from "@/components/shared";
```

**Problema:** Esses componentes não existem no projeto. O `PageLayout` não é necessário pois já existe um layout em `app/(site)/layout.tsx`.

### 2. **Dependências Faltando**

#### `framer-motion` não está no package.json
O código usa `framer-motion` mas não está instalado. Precisa adicionar:
```bash
npm install framer-motion
```

### 3. **Assets Faltando**

As imagens importadas não existem:
```tsx
import heroAula from "@/assets/hero-aula.jpg";
import heroBiblioteca from "@/assets/hero-biblioteca.jpg";
```

**Solução:** Criar a pasta `assets` na raiz ou mover as imagens para `public/` e usar caminhos relativos.

### 4. **Classes CSS Customizadas Não Definidas**

As seguintes classes não estão definidas no `globals.css`:
- `btn-fmp-primary`
- `btn-fmp`
- `container-fmp`
- `title-section`
- `bg-fmp-black`
- `text-fmp-white`
- `fmp-black`
- `fmp-white`

**Solução:** Adicionar essas classes no `globals.css` ou criar um arquivo de estilos customizados.

### 5. **Problema no Ícone de Play (linha 248)**

```tsx
// ❌ ERRADO - sintaxe inválida
<div className="w-0 h-0 border-l-20px border-l-primary-foreground border-y-12px border-y-transparent ml-1" />
```

**Problema:** Tailwind não aceita valores como `20px` diretamente. Deve usar classes do Tailwind ou estilos inline.

### 6. **Componente HeroSection Faltando**

O componente `HeroSection` precisa ser criado ou substituído por uma implementação inline.

---

## 📦 Componentes ShadCN Necessários

Com base no código analisado, você precisará instalar os seguintes componentes do ShadCN:

### Já Instalado:
- ✅ **button** (já existe em `app/_components/ui/button.tsx`)

### Componentes que PODEM ser úteis (mas não obrigatórios):
- **card** - Para os cards de diferenciais (linhas 137-150)
- **separator** - Para separadores visuais (se necessário)

### Componentes que NÃO são necessários:
O código atual não usa componentes complexos do ShadCN. A maioria é HTML semântico com Tailwind CSS.

---

## 🔧 Correções Necessárias

### Prioridade Alta:
1. ✅ Corrigir importação do `Link` (react-router → next/link)
2. ✅ Criar componente `HeroSection` ou substituir por implementação inline
3. ✅ Remover `PageLayout` (já existe layout no site)
4. ✅ Instalar `framer-motion`
5. ✅ Criar classes CSS customizadas ou substituir por classes do Tailwind

### Prioridade Média:
6. ✅ Adicionar assets (imagens) ou ajustar caminhos
7. ✅ Corrigir ícone de play (linha 248)

### Prioridade Baixa:
8. ✅ Considerar usar componente `card` do ShadCN para os diferenciais (opcional)

---

## 📝 Resumo de Ações

1. **Instalar dependência:**
   ```bash
   npm install framer-motion
   ```

2. **Componentes ShadCN a instalar (opcional):**
   ```bash
   npx shadcn@latest add card
   ```

3. **Criar pasta de assets ou mover imagens para public/**

4. **Criar classes CSS customizadas no globals.css**

5. **Criar componente HeroSection ou implementar inline**
