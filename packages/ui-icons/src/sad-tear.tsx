import { faSadTear } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SadTear icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SadTear = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSadTear} {...props} />;
};

export default SadTear;
