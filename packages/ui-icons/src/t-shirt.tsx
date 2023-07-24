import { faTShirt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TShirt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TShirt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTShirt} {...props} />;
};

export default TShirt;
