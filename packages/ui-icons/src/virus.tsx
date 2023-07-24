import { faVirus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Virus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Virus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVirus} {...props} />;
};

export default Virus;
