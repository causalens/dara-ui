import { faCropSimple } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CropSimple icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CropSimple = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCropSimple} {...props} />;
};

export default CropSimple;
