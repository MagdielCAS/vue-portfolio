rsync -a ./dist/ ../MagdielCAS.github.io/
cd ../MagdielCAS.github.io
git add .
git commit -m 'update-page - updatedist.sh'
git push
