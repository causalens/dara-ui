import { faPoundSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PoundSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PoundSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPoundSign} {...props} />;
};

export default PoundSign;
