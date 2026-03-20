# 🚀 NestJS + Drizzle ORM (Bun Runtime)

Este projeto utiliza **NestJS** executado no runtime **Bun** para performance máxima, com **Drizzle ORM** para persistência de dados seguindo o **Repository Pattern**.

---

## ⚡ Comandos com Bun

O Bun substitui o `npm` e o `node`, sendo significativamente mais rápido para instalar dependências e rodar scripts.

### Execução da API
| Comando | Descrição |
| :--- | :--- |
| `bun run start:dev` | Inicia o servidor em modo **watch** (recarrega ao salvar). |
| `bun run build` | Compila o projeto TypeScript para o diretório `dist/`. |
| `bun run start:prod` | Executa a versão compilada usando o runtime do Bun. |
| `bun run start:debug` | Inicia a aplicação com suporte a debugger. |

### Banco de Dados (Drizzle Kit)
Gerencie seu banco de dados de forma declarativa e segura.

* **`bun run db:generate`**: Gera os arquivos SQL de migração baseados nos schemas.
* **`bun run db:push`**: Sincroniza o schema diretamente com o banco (ambiente de dev).
* **`bun run db:up`**: Aplica as migrações SQL pendentes.
* **`bun run db:down`**: Reverte a última migração aplicada.
* **`bun run db:status`**: Exibe o estado atual das migrações.
* **`bun run db:seed`**: Alimenta o banco (executa `src/database/seeds/seed.ts` via Bun).

---

## 🧪 Testes e Qualidade

O Bun possui um test runner nativo, mas este projeto está configurado para usar a suíte do Jest para compatibilidade com o NestJS.

| Comando | Descrição |
| :--- | :--- |
| `bun run test` | Executa os testes unitários via Jest. |
| `bun run test:watch` | Executa os testes e aguarda alterações em tempo real. |
| `bun run test:cov` | Gera um relatório detalhado de cobertura de código. |
| `bun run test:e2e` | Executa testes de ponta a ponta (End-to-End). |
| `bun run lint` | Analisa e corrige problemas de estilo (ESLint). |
| `bun run format` | Formata todo o código usando Prettier. |

---

## 💡 Notas sobre o Bun

1.  **Instalação**: Para adicionar novas dependências, use `bun add <package>`.
2.  **Performance**: O comando `db:seed` já está configurado para rodar nativamente com o Bun, eliminando a lentidão do `ts-node` tradicional.
3.  **Variáveis de Ambiente**: O Bun lê arquivos `.env` automaticamente, mas o NestJS ainda pode exigir o `@nestjs/config` para injeção de dependência.

---
