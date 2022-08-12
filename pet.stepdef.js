import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^user has successfully landed on new pet UI screen$/,async () => {
    console.log('Before opening the browser..')
    await browser.url("https://spring-petclinic-community.herokuapp.com/owners/16")
    await browser.pause(8000)
    console.log('After opening the browser...')
	
});

When(/^user clicked on Add new pet button$/, async() => {
    const myButton = await $('[href="16/pets/new"]')
    await myButton.click()
   
	return true;
});

Then(/^user navigate to the add new pet page$/, async() => {
    await browser.url('https://spring-petclinic-community.herokuapp.com/owners/16/pets/new');
    console.log(await browser.getUrl());
    await browser.pause(5000)
	return true;
});

When(/^user has entered name, birth date and selected Pet type$/, async() => {
    await $('#name').setValue('german shepherd')
    await $('#birthDate').setValue('2021-10-12')


    let elemarray= await $$('select > option')
    let arr=[]
    for (let i=0;i<elemarray.length;i++){
        let ele = elemarray[i]
        let val = ele.getText()
        arr.push(val)
        console.log(val)
    }
    await(await $('#type').click())
    await browser.pause(3000)
	
    
    const selectBox = await $('#type')
    await selectBox.selectByAttribute('value', 'dog');
    await selectBox.getValue();
    await browser.pause(1000)
	return true;
});


When(/^user clicked on Add pet button$/, async() => {
    const myButton = await $('[type=submit]')
    await myButton.click()
    
	return true;
});

Then(/^Pet details should be successfully saved$/, async() => {
    await browser.url('https://spring-petclinic-community.herokuapp.com/owners/16');
    console.log(await browser.getUrl());
    await browser.pause(6000)
	return true;
});
