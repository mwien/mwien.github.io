for file in *.tex; do 
	pdflatex --shell-escape $file
done
cp *.png ../../../assets
mkdir tmp
cp *.tex tmp
cp *.sh tmp
rm * 
cp tmp/* .
rm -r tmp
