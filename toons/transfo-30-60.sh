#!/bin/sh
for i in $(seq 99)
do
	convert grisbouille0$i.png -background none -gravity center -resize 60x60 -extent 60x60 grisbouille0$i_mini.png
done
exit 0
