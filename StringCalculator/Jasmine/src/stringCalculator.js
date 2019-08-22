function add(str)
{
	var arrNum = [];
	var i = 0;
	var num1 = 0;
	var num2 = 0;
	if (arguments.length === 0 || arguments[0] == "")
		return (0);
	else
	{
		while (i < str.length)
		{
			while (str[i] != ',')
			{
				arrNum.push(str[i++]);
				if (str[i + 1] === ',')
				{
					num1 = Number(arrNum.join(""));
					arrNum = [];
					i++;
					i++;
					break ;
				}
			}
		//	if (str[i] === ',' || str[i] === ' ')
		//		i++;
			arrNum.push(str[i++]);
		}
		console.log(arrNum);
		num2 = Number(arrNum.join(""));
		console.log(num2);
		return(num1 + num2);
		
	}
}

add("309,21");
