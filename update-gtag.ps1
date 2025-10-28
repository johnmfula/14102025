param(
    [string]$Root = "."
)

Set-Location $Root

$tag = @'
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10953053169">
    </script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'AW-10953053169');
    </script>
'@

$regexOptions = [System.Text.RegularExpressions.RegexOptions]::Singleline -bor [System.Text.RegularExpressions.RegexOptions]::IgnoreCase

$rxExternalLoader    = [regex]::new('<script[^>]*src="https://www\.googletagmanager\.com/gtag/js\?id=[^"]+"[^>]*>\s*</script>\s*', $regexOptions)
$rxConfigBlock       = [regex]::new('<script\b[^>]*>[\s\S]*?window\.dataLayer[\s\S]*?gtag\(\s*["'']config["'']\s*,\s*["''][^"'']+["'']\s*\)[\s\S]*?</script>\s*', $regexOptions)
$rxConversionFunc    = [regex]::new('<script\b[^>]*>[\s\S]*?function\s+gtag_report_conversion\([\s\S]*?</script>\s*', $regexOptions)
$rxDuplicateOurTag   = [regex]::new('<!--\s*Google tag \(gtag\.js\)\s*-->[\s\S]*?gtag\(\s*["'']config["'']\s*,\s*["'']AW-10953053169["'']\s*\)[\s\S]*?</script>\s*', $regexOptions)
$rxHeadOpen          = [regex]::new('(<head[^>]*>)', $regexOptions)

Get-ChildItem -Path . -Recurse -Filter *.html | ForEach-Object {
    $path = $_.FullName
    $content = Get-Content -Raw -Path $path

    $content = $rxExternalLoader.Replace($content, '')
    $content = $rxConfigBlock.Replace($content, '')
    $content = $rxConversionFunc.Replace($content, '')
    $content = $rxDuplicateOurTag.Replace($content, '')

    if ($rxHeadOpen.IsMatch($content)) {
        $content = $rxHeadOpen.Replace($content, "$1`n$tag", 1)
    } else {
        $content = $tag + $content
    }

    Set-Content -Path $path -Value $content -Encoding UTF8
}
