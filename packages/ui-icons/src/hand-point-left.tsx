import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandPointLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandPointLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandPointLeft} {...props} />;
};

export default HandPointLeft;
