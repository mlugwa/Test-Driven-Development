function add(str)
{
        var i = 0;
        var sum = 0;
        var arr = str.split(',');
        while (i < arr.length)
        {
                var num = arr[i++];
                num = Number(num);
                sum = sum + num;
        }
        return (sum);
}
