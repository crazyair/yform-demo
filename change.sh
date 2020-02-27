changelog=$(cat CHANGELOG.md)
echo $changelog
echo "::set-output name=changelog::$changelog"