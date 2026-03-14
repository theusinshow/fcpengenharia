# Mobile Fix — FCP Engenharia Elétrica
> Foco total em mobile (390px iPhone 14). Auditoria feita ao vivo com viewport
> redimensionado para 390x844px. Aplicar APÓS o bugfix.md.
> Todos os problemas abaixo foram confirmados visualmente em screenshot real.

---

## PRIORIDADE 1 — BUGS CRÍTICOS MOBILE (site inutilizável)

---

### BUG M01 — Hero completamente invisível na primeira dobra

**O que acontece:** O usuário abre o site no celular e vê apenas a imagem de
fundo escura. Headline, badge, subtítulo e botões estão todos fora da viewport.
O conteúdo só aparece após rolar a tela.

**Causa:** O hero usa `min-height: 100vh` mas a navbar fixa de 80px não é
descontada. Em mobile, o conteúdo começa em `top: 0` mas a navbar cobre os
primeiros 80px, empurrando tudo para baixo e para fora da tela.

**Correção no Hero.tsx:**
```tsx
// Hero.tsx
<section
  id="hero"
  className="relative flex items-center justify-center overflow-hidden"
  style={{
    minHeight: '100dvh',              // dvh = dynamic viewport height (mobile-safe)
    paddingTop: '80px',               // altura exata da navbar fixa
    paddingBottom: '40px',
  }}
>
  {/* conteúdo centralizado */}
  <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full">

    {/* badge */}
    <div className="inline-block mb-6 px-4 py-2 border border-[#F5C518] text-[#F5C518]
        font-mono text-xs tracking-widest">
      [ CREA-SC · CRICIÚMA, SC ]
    </div>

    {/* headline responsiva */}
    <h1 className="font-display font-bold leading-none mb-6
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
      Engenharia{' '}
      <span className="text-[#F5C518]">Elétrica</span>
      <br />de Alto Padrão.
    </h1>

    {/* subtítulo */}
    <p className="text-[#888888] mb-8 max-w-lg mx-auto
        text-sm sm:text-base md:text-lg leading-relaxed px-4">
      Projetos elétricos completos — do laudo à aprovação — para
      construtoras, indústrias e empreendedores exigentes de SC.
    </p>

    {/* botões empilhados em mobile */}
    <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
      <a href="#contato"
        className="px-8 py-4 bg-[#F5C518] text-[#0D0D0D] font-bold
            text-sm tracking-wide uppercase text-center w-full sm:w-auto">
        Solicitar Orçamento →
      </a>
      <a href="#portfolio"
        className="px-8 py-4 border border-white/50 text-white
            text-sm tracking-wide uppercase text-center w-full sm:w-auto">
        Ver Portfólio
      </a>
    </div>

  </div>
</section>
```

---

### BUG M02 — Menu hamburguer com links incompletos

**O que acontece:** Menu abre mas exibe apenas "INÍCIO" e "SERVIÇOS".
Faltam "PORTFÓLIO", "SOBRE", "CONTATO" e o botão "ORÇAMENTO".

**Causa:** O array de links do menu mobile provavelmente está hardcoded com
apenas 2 itens, diferente do desktop.

**Correção no Header.tsx:**
```tsx
// Header.tsx — garantir que TODOS os links estão no menu mobile

const navLinks = [
  { label: 'INÍCIO',    href: '#hero' },
  { label: 'SERVIÇOS',  href: '#servicos' },
  { label: 'PORTFÓLIO', href: '#portfolio' },
  { label: 'SOBRE',     href: '#sobre' },
  { label: 'CONTATO',   href: '#contato' },
]

// Menu mobile — drawer lateral ou full screen
{mobileMenuOpen && (
  <div className="fixed inset-0 z-50 bg-[#0D0D0D] flex flex-col"
    style={{ paddingTop: '80px' }}>

    <nav className="flex flex-col px-8 gap-1 mt-8">
      {navLinks.map(link => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setMobileMenuOpen(false)}
          className="py-5 text-white font-display font-bold text-2xl
              border-b border-[#1C1C1C] hover:text-[#F5C518] transition-colors
              flex items-center justify-between"
        >
          {link.label}
          <span className="text-[#F5C518] text-lg">→</span>
        </a>
      ))}
    </nav>

    {/* CTA no final do menu */}
    <div className="mt-auto px-8 pb-12">
      <a
        href="#contato"
        onClick={() => setMobileMenuOpen(false)}
        className="block w-full py-4 bg-[#F5C518] text-[#0D0D0D]
            font-bold text-center text-sm tracking-widest uppercase"
      >
        SOLICITAR ORÇAMENTO →
      </a>
      <p className="text-center text-[#555] text-xs mt-4 font-mono">
        (48) 99956-9631
      </p>
    </div>

  </div>
)}
```

---

### BUG M03 — Portfólio preto + cards estouram viewport mobile

**O que acontece:** Carrossel completamente preto. Cards de 420px fixo
estouram o viewport de 390px causando scroll horizontal indesejado.

**Correção no Portfolio.tsx:**
```tsx
// Container do carrossel — largura dos cards responsiva
<div
  ref={carouselRef}
  className="flex overflow-x-auto"
  style={{
    gap: '2px',
    height: 'clamp(320px, 60vw, 560px)',   // altura responsiva
    scrollSnapType: 'x mandatory',
    scrollbarWidth: 'none',
    WebkitOverflowScrolling: 'touch',
    cursor: 'grab',
  }}
>
  {projects.map((project) => (
    <div
      key={project.id}
      className="relative flex-shrink-0"
      style={{
        width: 'clamp(280px, 80vw, 420px)',   // responsivo: 80% da tela em mobile
        scrollSnapAlign: 'start',
      }}
    >
      {/* imagem com fallback */}
      <div className="w-full h-full bg-[#1C1C1C] relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => { e.currentTarget.style.opacity = '0'; }}
        />
        {/* overlay sempre presente */}
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(13,13,13,0.95) 0%, transparent 60%)'
          }}
        />
        {/* conteúdo sempre visível em mobile (sem depender de hover) */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="block font-mono text-[10px] text-[#F5C518]
              tracking-widest mb-2">
            {project.category}
          </span>
          <div className="w-8 h-[1.5px] bg-[#F5C518] mb-3" />
          <h3 className="text-white font-bold text-lg mb-1">
            {project.title}
          </h3>
          <p className="text-[#888] text-xs">
            {project.disciplines}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
```

> IMPORTANTE: Em mobile não existe hover — o overlay de descrição deve ser
> SEMPRE visível (opacity: 1), não só ao hover. Remover lógica de hover
> para telas touch.

---

### BUG M04 — Framer Motion trava Sobre e Contato (seções invisíveis)

**O que acontece:** As seções Sobre e Contato ficam completamente pretas
em mobile. Mesmo problema do BUG 03 do bugfix.md, mas mais severo em mobile
porque o IntersectionObserver tem comportamento diferente em WebKit/iOS.

**Correção — globals.css + todos os componentes:**
```css
/* globals.css — adicionar fallback para prefers-reduced-motion e iOS */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

```tsx
// Em TODOS os componentes com Framer Motion — usar este padrão:
const motionProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05, margin: '0px 0px -20px 0px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
}

// Ou para elementos críticos — substituir por CSS animation pura:
<div className="animate-reveal">
  {/* conteúdo */}
</div>
```

```css
/* globals.css */
@keyframes reveal {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-reveal {
  animation: reveal 0.5s ease-out forwards;
}
```

---

## PRIORIDADE 2 — DESIGN UI/UX MOBILE (melhorias de layout)

---

### MOBILE 01 — Stats: grid 2x2 em mobile

```tsx
// Stats.tsx — 4 colunas no desktop, 2x2 no mobile
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
  {stats.map(stat => (
    <div key={stat.label} className="text-center py-4">
      <p className="font-mono text-3xl md:text-4xl font-bold text-[#F5C518] mb-2">
        {stat.display || `${stat.value}${stat.suffix}`}
      </p>
      <p className="text-[10px] md:text-xs tracking-widest text-[#888] uppercase">
        {stat.label}
      </p>
    </div>
  ))}
</div>
```

---

### MOBILE 02 — Serviços: 1 coluna em mobile, 2 em tablet, 3 no desktop

```tsx
// Services.tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px]
    border border-[#2A2A2A]">
  {services.map((service, i) => (
    <div key={i}
      className="p-6 md:p-8 bg-[#141414] border border-[#2A2A2A]
          hover:border-[#F5C518] transition-colors group">
      {/* ícone */}
      <div className="text-[#F5C518] mb-4 w-6 h-6">{service.icon}</div>
      {/* número decorativo */}
      <span className="font-mono text-xs text-[#2A2A2A] float-right mt-1">
        {String(i + 1).padStart(2, '0')}
      </span>
      <h3 className="font-bold text-white text-lg mb-3">{service.title}</h3>
      <p className="text-[#888] text-sm leading-relaxed mb-4">
        {service.description}
      </p>
      <span className="text-[#F5C518] text-sm">Ver detalhes →</span>
    </div>
  ))}
</div>
```

---

### MOBILE 03 — Portfólio: indicador de swipe em mobile

```tsx
// Mostrar dica de swipe apenas em mobile, sumir após 1 interação
{!hasInteracted && (
  <div className="flex md:hidden items-center justify-center gap-2
      mt-4 text-[#555] text-xs font-mono animate-pulse">
    <span>←</span>
    <span>DESLIZE PARA VER MAIS</span>
    <span>→</span>
  </div>
)}
```

---

### MOBILE 04 — Sobre: foto full-width em mobile, lado a lado no desktop

```tsx
// About.tsx
<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">

  {/* foto — full width mobile */}
  <div className="w-full md:w-[420px] flex-shrink-0">
    <img
      src="https://static.wixstatic.com/media/b817bd_b5df10da5db649e8bcb2643ff357827b~mv2.jpg/v1/fill/w_400,h_400,al_c,q_95/file.jpg"
      alt="Fernando Coan Peterle — Engenheiro Eletricista"
      className="w-full aspect-square object-cover object-top"
      style={{
        border: '1px solid #2A2A2A',
        filter: 'grayscale(10%) contrast(1.05)', // resolve fundo branco
      }}
    />
  </div>

  {/* texto */}
  <div className="flex-1">
    <h2 className="font-display font-bold text-white text-2xl md:text-4xl mb-2">
      Fernando Coan Peterle
    </h2>
    <p className="font-mono text-[#F5C518] text-sm mb-6">
      Engenheiro Eletricista · CREA-SC
    </p>
    {/* blocos de missão/visão/valores */}
    {['MISSÃO', 'VISÃO', 'VALORES'].map(bloco => (
      <div key={bloco}
        className="border-l-2 border-[#F5C518] pl-4 mb-6">
        <p className="font-mono text-[10px] text-[#F5C518] tracking-widest mb-2">
          {bloco}
        </p>
        <p className="text-[#888] text-sm leading-relaxed">
          {/* texto do bloco */}
        </p>
      </div>
    ))}
  </div>

</div>
```

---

### MOBILE 05 — Contato: coluna única em mobile

```tsx
// Contact.tsx
<div className="flex flex-col md:flex-row gap-12 md:gap-16">

  {/* dados de contato — acima em mobile */}
  <div className="flex flex-col gap-6 md:w-72 flex-shrink-0">
    {contactItems.map(item => (
      <div key={item.label} className="flex items-start gap-4">
        <div className="text-[#F5C518] w-5 h-5 mt-0.5 flex-shrink-0">
          {item.icon}
        </div>
        <div>
          <p className="font-mono text-[10px] text-[#F5C518] tracking-widest mb-1">
            {item.label}
          </p>
          <p className="text-white text-sm">{item.value}</p>
        </div>
      </div>
    ))}
  </div>

  {/* formulário full-width */}
  <div className="flex-1">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* campos */}
    </div>
    {/* botão full-width em mobile */}
    <button className="w-full py-4 bg-[#F5C518] text-[#0D0D0D]
        font-bold text-sm tracking-widest uppercase mt-4">
      Enviar Solicitação →
    </button>
  </div>

</div>
```

---

### MOBILE 06 — WhatsApp flutuante: reposicionar para não sobrepor setas

```tsx
// WhatsAppFloat.tsx
// Em mobile, mover para bottom-left para não conflitar com setas do carrossel
<a
  href="https://wa.me/5548999569631"
  aria-label="Falar pelo WhatsApp"
  className="fixed z-50 flex items-center justify-center
      w-12 h-12 bg-[#25D366]
      bottom-6 right-6 md:bottom-8 md:right-8"
  style={{ borderRadius: 0 }}
>
  {/* ícone WhatsApp */}
</a>
```

---

### MOBILE 07 — Tipografia responsiva global

```tsx
// tailwind.config.ts — adicionar fluid typography
// Ou aplicar diretamente com classes responsive:

// Títulos de seção H2
className="text-3xl md:text-4xl lg:text-5xl font-bold"

// Labels de seção [ 02 — X ]
className="text-[10px] md:text-xs font-mono tracking-widest text-[#F5C518]"

// Body text
className="text-sm md:text-base leading-relaxed text-[#888]"

// Headline do hero
className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none"
```

---

### MOBILE 08 — Navbar mobile: altura e padding ajustados

```tsx
// Header.tsx
<header
  className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]
      border-b border-[#2A2A2A]"
  style={{ height: '64px' }}     // 64px em mobile (era 80px), mais compacto
>
  <div className="flex items-center justify-between h-full px-5 md:px-8">

    {/* logo */}
    <a href="#hero" className="flex flex-col leading-none">
      <span className="font-display font-bold text-white text-xl">FCP</span>
      <span className="font-mono text-[8px] text-[#666] tracking-widest mt-0.5">
        ENGENHARIA · ELÉTRICA
      </span>
    </a>

    {/* desktop nav — escondida em mobile */}
    <nav className="hidden md:flex items-center gap-10">
      {/* links */}
    </nav>

    {/* hamburguer — visível só em mobile */}
    <button
      className="md:hidden text-white p-2"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
    >
      {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
    </button>

    {/* CTA — escondido em mobile */}
    <a href="#contato"
      className="hidden md:flex items-center gap-2 px-5 py-2.5
          border border-white/30 text-white text-xs tracking-widest
          uppercase hover:bg-[#F5C518] hover:text-[#0D0D0D]
          hover:border-[#F5C518] transition-all">
      ORÇAMENTO →
    </a>

  </div>
</header>
```

---

### MOBILE 09 — Footer responsivo

```tsx
// Footer.tsx
<footer className="bg-[#080808] border-t border-[#F5C518] px-6 py-12">
  <div className="max-w-6xl mx-auto">

    {/* logo + links em coluna no mobile */}
    <div className="flex flex-col md:flex-row md:items-center
        md:justify-between gap-8">

      {/* logo */}
      <div>
        <p className="font-display font-bold text-white text-2xl">FCP</p>
        <div className="w-8 h-[2px] bg-[#F5C518] my-1" />
        <p className="font-mono text-[9px] text-[#555] tracking-widest">
          ENGENHARIA ELÉTRICA · CRICIÚMA SC
        </p>
      </div>

      {/* links — wrap em mobile */}
      <nav className="flex flex-wrap gap-x-8 gap-y-3">
        {['Início','Serviços','Portfólio','Sobre','Contato'].map(link => (
          <a key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#666] text-xs hover:text-white transition-colors">
            {link}
          </a>
        ))}
      </nav>

      {/* instagram */}
      <a href="https://instagram.com/FCP_EngEletrica"
        className="text-[#666] text-xs hover:text-white flex items-center gap-2">
        @FCP_EngEletrica
      </a>

    </div>

    {/* linha divisória */}
    <div className="border-t border-[#1C1C1C] mt-8 pt-6
        flex flex-col md:flex-row justify-between gap-2">
      <p className="text-[#444] text-xs">
        © 2026 FCP Engenharia Elétrica. Todos os direitos reservados.
      </p>
      <p className="text-xs">
        Desenvolvido por{' '}
        <span className="text-[#F5C518] font-bold">Coded by M</span>
      </p>
    </div>

  </div>
</footer>
```

---

## ORDEM DE EXECUÇÃO

```
1. BUG M01 — Hero.tsx (paddingTop + min-height dvh + botões empilhados)
2. BUG M02 — Header.tsx (todos os links no menu + drawer full-screen)
3. BUG M03 — Portfolio.tsx (width clamp + overlay sempre visível em mobile)
4. BUG M04 — Framer Motion (amount: 0.05 em todos + CSS fallback)
5. MOBILE 01 a 09 — refinamentos de layout responsivo
6. git add . && git commit -m "fix: mobile responsivo completo"
7. git push
8. Testar em https://fcpengenharia.vercel.app/ no celular real
```

## CHECKLIST DE TESTE NO CELULAR APÓS DEPLOY

- [ ] Hero aparece completo na primeira dobra sem rolar
- [ ] Menu hamburguer mostra todos os 5 links + botão orçamento
- [ ] Portfólio exibe imagens e overlay sempre visível
- [ ] Serviços em 1 coluna, legível
- [ ] Sobre com foto full-width
- [ ] Contato com formulário em coluna única
- [ ] Footer sem overflow horizontal
- [ ] WhatsApp não conflita com setas do carrossel
- [ ] Nenhuma seção invisível / tela preta
- [ ] Scroll suave entre seções funcionando

---

*Gerado em: 2026 | Projeto: FCP Engenharia Elétrica | Dev: Coded by M*