# Code Jam Code Pad

![coding image](https://miro.medium.com/max/1400/1*5H6STKG7-Mh_VGwHMtohTA.png)

#### `pad help`

```
NAME
  codepad - templated environments and utilities for competitive coding

SYNOPSIS
  codepad new [template] [name]
  codepad help

OPTIONS
  [template] => defaults nodei nodeio

SEE ALSO
  Add the following alias to your shell to automatically change into the new code.

  function pad {
    local CODEPAD="$HOME/repos/codepad/codepad"

    if [ "$1" = "new" ]
    then
      cd "`$CODEPAD $@`"
    else
      $CODEPAD $@
    fi
  }
```
