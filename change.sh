# changelog=$(cat CHANGELOG.md)
MD=$(cat CHANGELOG.md)
VERSION=0.4.0
# changelog=$(cat <CHANGELOG.md | grep '\S*' )


# BIZ_PROJECTS=$(cat <$BASE_PATH/update.sh | grep '^BIZ_PROJECTS="\S*"' | grep -o '\[\S*\]')


# changelog=$(echo "$VERSION" | xargs -i sed -n '/^#\s\'"{}"'.*$/,/^#\s\([^[:space:]]\+\).*$/{//!p}' $MD)
# changelog=$(echo "$VERSION")
changelog=$(echo "$MD" | xargs )

echo $changelog
# changelog="${changelog//'%'/'%25'}"
# changelog="${changelog//$'\n'/'%0A'}"
# changelog="${changelog//$'\r'/'%0D'}"
# echo "::set-output name=changelog::$changelog"


# url="http://c.biancheng.net/index.html"
# echo ${MD#0.4.0}


str="---aa+++aa@@@"
echo ${str%aa*}  #结果为 ---aa+++
echo ${str%%aa*}  #结果为 ---
echo ${MD%%'0.4.0'*}  #结果为 ---