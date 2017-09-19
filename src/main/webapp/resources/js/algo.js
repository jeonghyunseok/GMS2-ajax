var series={
		arithmetic : (f,l)=>{
			var sum=0;
			var first=f*1;
			var last=l*1;
			for(var i=first;i<=last;i++){
				sum+=i;
			}			
		return sum;
		},
		switchSeries :()=>{
			var sum=0;
			var sw=0;
			var first=0;
			do{
				first++;
			if(sw==0){
				sum+=first;
				sw=1;
			}else{
				sum-=first;
				sw=0;
			}
			}
			while(first<100);
			return sum;
			},
		differSeries:x=>{
			var i=1;
			var j=0;
			var sum=0;
			
			do{
			i+=j;
			sum+=i;
			j++;
			}
			while(j<x);
			return sum;
		},
		factorial:(x)=>{
			var i=1;
			var j=1;
			var sum=0;
			
			do{
			j*=i;
			i++;
			sum+=j;
			}
			while(i<=x);
			return sum;
		},
		fibonacci:()=>{
			
			var a,b,c,sum,cnt;
			a=1;
			b=1;
			sum=2;
			cnt=2;
			while(1){
				c=a+b;
				sum+=c;
				cnt++;
			if(cnt<20){
				a=b;
				b=c;
			}else{
				return sum;
				break;
			}
			};
			return sum;
			
		}

}