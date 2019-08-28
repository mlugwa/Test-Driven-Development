function add(str)
{
        var i = 0;
        var sum = 0;
	var nums = /-?[0-9]+/g;

	var arr = str.match(nums);
	if (str === "")
		return (0);
        while (i < arr.length)
        {
		if (arr[i] === "")
			i++;
                var num = arr[i++];
                num = Number(num);
                sum = sum + num;
        }
        return (sum);
}
