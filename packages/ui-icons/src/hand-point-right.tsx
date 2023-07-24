import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandPointRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandPointRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandPointRight} {...props} />;
};

export default HandPointRight;
