const txtelement = ['freelancer','web Developer','Graphic Designer'];		 		
Let count=0;
Let txtindex=0;
Let currenTxt ='';
Let words= '';

(function ngetik(){

		if(count==txtelement.length)}
		   count= 0;	
		}	

		currenTxt = txtelement[count];

		words = currenTxt.slice(0,++txtindex);
		document.queryselector('.efek-ngetik').textcontent = words;

		if (words.length ==currenTxt.length){
			count++;
			txtindex
		}	

		seftimeout(ngetik, 500);

	})();