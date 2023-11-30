import greeksalad from 'assets/greeksalad.jpg';
import lemondessert from 'assets/lemon-lasagna.png';
import bruschetta from 'assets/bruschetta.jpg';
import Button from './Button/button';
import { Card, CardBody, CardFooter } from '@chakra-ui/card';

function Specials() {
    return (
        <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", justifyContent: "start" }}>
                <h1 style={{fontSize: "larger", marginLeft: "120px", marginRight: "120px", marginTop: "40px"}}>Specials</h1>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginLeft: "120px", marginRight: "120px" }}>
                <div style={{flex: 2}}>
                <Card maxW='sm'>    
                    <CardBody>
                        <img
                            style={{height:"250px", width: "320px"}}
                            src={greeksalad}
                            alt='GreekSalad'
                            borderRadius='lg'
                        />
                        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", margin: "5px" }} >
                            <h1>GreekSalad</h1>
                            <p color='blue.600' fontSize='2xl'>
                                $12.99
                            </p>
                        </div>
                        <p>
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>

                    </CardBody>

                    <CardFooter>
                        <Button>OrderOnline</Button>
                    </CardFooter>
                </Card>
                </div>
                <div style={{flex: 2}}>
                <Card maxW='sm'>
                    <CardBody>
                        <img
                            style={{height:"250px", width: "320px"}}
                            src={lemondessert}
                            alt='LemonDessert'
                            borderRadius='lg'
                      />
                        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", margin: "5px" }} >
                            <h1>LemonDessert</h1>
                            <p color='blue.600' fontSize='2xl'>
                                $10.50
                            </p>
                        </div>
                        <p>
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>

                    </CardBody>

                    <CardFooter>
                        <Button>OrderOnline</Button>
                    </CardFooter>
                </Card>
                </div>
                <div style={{flex: 2}}>
                <Card maxW='sm'>
                    <CardBody>
                        <img
                            style={{height:"250px", width: "320px"}}
                            src={bruschetta}
                            alt='Bruschetta'
                            borderRadius='lg'
                        />
                        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", margin: "5px" }} >
                            <h1>Bruschetta</h1>
                            <p color='blue.600' fontSize='2xl'>
                                $8.95
                            </p>
                        </div>
                        <p>
                            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                        </p>
                    </CardBody>

                    <CardFooter>
                        <Button>OrderOnline</Button>
                    </CardFooter>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default Specials;