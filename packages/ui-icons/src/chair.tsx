import { faChair } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Chair icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Chair = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChair} {...props} />;
};

export default Chair;
