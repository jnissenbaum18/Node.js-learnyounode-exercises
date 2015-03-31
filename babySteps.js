var count = 0
for (var i = 2; i <= process.argv.length - 1; i++) {
	count += +process.argv[i]
}
console.log(count)
return count