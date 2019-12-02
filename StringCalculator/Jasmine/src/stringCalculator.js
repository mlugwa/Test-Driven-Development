function add(str)
{
        var i = 0;
        var sum = 0;
	var nums = /-?[0-9]+/g;
	var negs = [];

	var arr = str.match(nums);
	if (str === "")
		return (0);
        while (i < arr.length)
        {
		if (arr[i] < 0)
		{
			var j = i;
			while (j < arr.length)
			{
				if (arr[j] < 0)
					negs.push(arr[j]);
				j++;
			}
		}

		if (arr[i] === "")
			i++;
		if (arr[i] > 1000)
			i++;
		if (arr[i] < 0)
			throw "Error: Negative numbers are not allowed! The negative numbers are " + negs;
                var num = arr[i++];
                num = Number(num);
                sum = sum + num;
        }
        return (sum);
}

module.exports = add;
