import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UmbrellaBeach icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UmbrellaBeach = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUmbrellaBeach} {...props} />;
};

export default UmbrellaBeach;
