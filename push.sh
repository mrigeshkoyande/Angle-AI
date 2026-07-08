#!/bin/bash
echo "Moving git repository to root to track the entire full-stack project..."
mv Angle-AI/.git . || echo "(Git folder already in root)"

echo "Staging all files (Frontend and Backend)..."
git add .

echo "Committing changes..."
git commit -m "feat: complete full-stack integration with unified startup, Firebase, and Prisma"

echo "Pushing to GitHub..."
git push origin main || git push origin master

echo "Done! Everything has been pushed."
