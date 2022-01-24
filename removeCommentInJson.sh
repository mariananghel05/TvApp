#!/bin/sh


s=$(cat ./config/imports.json  | grep -A 1 -B 1 .*_comment.*)
s=$(cat ./config/imports.json | grep -v -B 1 "$s")
echo "$s" | grep -v \s*--\s* > txt.txt