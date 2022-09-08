#!/bin/bash

for file in *.png; do
	cwebp -q 100 -lossless "$file" -o "${file%.png}.webp"
done
