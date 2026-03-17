# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

This is a Data Visualization school project (Year 3 Sem 2, Module 2). The stack is Python + Jupyter Notebooks with data files (CSV, Excel, etc.) that are gitignored and kept local.

## Common Commands

```bash
# Install dependencies (once requirements.txt exists)
pip install -r requirements.txt

# Launch Jupyter
jupyter notebook

# Run a Python script
python script_name.py
```

## Git Workflow

After completing any meaningful unit of work (new file, feature, fix, or analysis step), commit and push to GitHub immediately. Never let work accumulate uncommitted.

- Use clear, descriptive commit messages (e.g. `add bar chart for sales by region`, `fix axis labels in notebook 2`)
- Push after every commit: `git push`
- The goal is that GitHub always reflects the current state of work — nothing should exist only on local disk

## Repository Notes

- Data files (`.csv`, `.xlsx`, `.db`, etc.) are gitignored — they live only on disk and are not committed.
- Jupyter checkpoint files (`.ipynb_checkpoints/`) are also gitignored.
- The remote is `https://github.com/KhantNyarLu/Run-Log.git` on branch `master`.
