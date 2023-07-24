import { faLungsVirus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LungsVirus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LungsVirus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLungsVirus} {...props} />;
};

export default LungsVirus;
