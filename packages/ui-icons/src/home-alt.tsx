import { faHomeAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HomeAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HomeAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHomeAlt} {...props} />;
};

export default HomeAlt;
