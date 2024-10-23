function stop()
{
    let count=0;
    return function()
    {
    count++;

    return count;}
}
    const clock1=stop();

    console.log(clock1());
    console.log(clock1());
    console.log(clock1());
