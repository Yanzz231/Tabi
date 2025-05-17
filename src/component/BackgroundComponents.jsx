import { FireFlies, CloudAnimation, FallingLeaves, Stars, Weather, SunorMoon } from '../component/animation/animation';

export const BackgroundImage = ({ image, isDay }) => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('${image}')`,
                }}
            />

            <Weather isDay={isDay} />
            <CloudAnimation isDay={isDay} />
            {isDay ? (
                <>
                    <FallingLeaves amount={30} />
                    <FireFlies amount={30} />
                    <SunorMoon type="sun" />
                </>
            ) : (
                <>
                    <Stars amount={50} />
                    <SunorMoon type="moon" />
                </>
            )}

        </div>
    )
}