import { faDigitalTachograph } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DigitalTachograph icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DigitalTachograph = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDigitalTachograph} {...props} />;
};

export default DigitalTachograph;
